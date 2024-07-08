import { findOneProductById, updateProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const data = await findOneProductById(id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={data.img || "/noproduct.jpg"} alt="" fill />
        </div>
        {data.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={data.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={data.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={data.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={data.stock} />
          <label>Color</label>
          <input type="text" name="color" placeholder={data.color} />
          <label>Size</label>
          <input type="text" name="Size" placeholder={data.size} />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            placeholder={data.desc}
            id="desc"
            rows="10"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
