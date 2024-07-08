import { findOneUserById, updateUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async({params}) => {
  const {id} = params;
  const data = await findOneUserById(id)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={ data.img ||"/noavatar.png"} alt="" fill />
        </div>
        {data.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={data.id}></input>
          <label>Username</label>
          <input type="text" name="username" placeholder={data.username}  />
          <label>Email</label>
          <input type="email"   name="email" placeholder={data.email} />
          <label>Password</label>
          <input type="password"  name="password" placeholder={data.password} />
          <label>Phone</label>
          <input type="text" name="phone"  placeholder={data.phone} />
          <label>Address</label>
          <textarea
            type="text"
            name="address"
            placeholder="Jakarta Timur, Duren Sawit"
            value={data.address}
          />
          <label>Is Admin ?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={data.isAdmin}>Yes</option>
            <option value={false} selected={!data.isAdmin}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={data.isActive}>Yes</option>
            <option value={false} selected={!data.isActive}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
