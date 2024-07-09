"use server";
import { revalidatePath } from "next/cache";
import { Product, User } from "./models";
import { connectToDB } from "./utlis";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const salt = await bcrypt.genSalt(10);
    const hashPass = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashPass,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed create user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed update user");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, desc, price, stock, size, color } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      size,
      color,
    });

    await newProduct.save();
  } catch (error) {
    console.log(error);
    throw new Error("Failed create product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, size, color } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const updateFields = {
      title,
      desc,
      price,
      stock,
      size,
      color,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("Failed update product");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed delete product");
  }

  revalidatePath("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Failed delete User");
  }

  revalidatePath("/dashboard/users");
};

export const findOneUserById = async (id) => {
  try {
    const data = await User.findById(id);

    return data;
  } catch (error) {
    console.log(error);
    throw new error("Failed get user By Id");
  }
};

export const findOneProductById = async (id) => {
  try {
    const data = await Product.findById(id);

    return data;
  } catch (error) {
    console.log(error);
    throw new error("Failed get Product By Id");
  }
};

export const authenticate = async (prevState,formData) => {
  const { username, password } = Object.fromEntries(formData);

  console.log(username);
  try {
    await signIn("credentials", { username, password });
  } catch (error) {

    return "Wrong credentials!"
  }
};
