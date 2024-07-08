import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noproduct.jpg" alt="" fill />
        </div>
        Iphone
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Iphone" />
          <label>Price</label>
          <input type="number" name="price" placeholder="$9999" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="100" />
          <label>Color</label>
          <input type="text" name="color" placeholder="Red" />
          <label>Size</label>
          <input type="text" name="Size" placeholder="L" />
          <label>Category</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            placeholder="Description"
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
