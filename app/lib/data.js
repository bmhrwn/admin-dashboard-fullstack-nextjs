import { Product, User } from "./models";
import { connectToDB } from "./utlis";

export const fetchUser = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();
    const user = User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return user;
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch data");
  }
};

export const countUsers = async (q, page) => {
  const regex = new RegExp(q, "i");
  try {
    connectToDB();
    const count = User.find({ username: { $regex: regex } }).count();

    return count;
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch data");
  }
};


export const fetchProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  const ITEM_PER_PAGE = 2;
  try {
    connectToDB();
    const products = Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));

    return products;
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch data");
  }
};

export const countProducts = async (q, page) => {
  const regex = new RegExp(q, "i");
  try {
    connectToDB();
    const count = Product.find({ title: { $regex: regex } }).count();

    return count;
  } catch (error) {
    console.log(err);
    throw new Error("Failed to fetch data");
  }
};


