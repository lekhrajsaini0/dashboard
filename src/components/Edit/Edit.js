import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import styles from "./Edit.module.css";
import img from "../../assets/image/AK_2022_11_08_309 (2).png";

const Edit = ({ data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.main}>
      <h1 className={styles.members}>Edit Member</h1>
      <div className={styles.editForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.formMain}>
            <Image
              priority
              src={img}
              alt="user image"
              width={290}
              height={358.6}
              className={styles.editImg}
            />
            <div>
              <div className={styles.formFlex}>
                <div>
                  <label className={styles.labelField}>Edit Name</label>
                  <input
                    type="text"
                    placeholder={data.name}
                    {...register("name", { required: true })}
                    className={styles.halfField}
                  />
                  {errors.name && <span>This field is required</span>}
                </div>
                <div>
                  <label className={styles.labelField}>Edit Title</label>
                  <input
                    type="text"
                    placeholder={data.position}
                    {...register("title", { required: true })}
                    className={styles.halfField}
                  />
                  {errors.title && <span>This field is required</span>}
                </div>
              </div>
              <div>
                <label className={styles.labelField}>Edit Email</label>
                <input
                  type="email"
                  placeholder="aanchal@apostrfy.com"
                  {...register("email", { required: true })}
                  className={styles.fullField}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div>
                <label className={styles.labelField}>Edit Quote</label>
                <input
                  type="text"
                  placeholder="They couldn't get me to pose without my kids."
                  {...register("quote", { required: true })}
                  className={styles.fullField}
                />
                {errors.quote && <span>This field is required</span>}
              </div>
            </div>
          </div>
          <div className={styles.bottomFlex}>
            <div>
              <label className={styles.labelField}>Edit Photo</label>
              <input
                type="file"
                {...register("photo", { required: true })}
                className={styles.photo}
              />
              {errors.photo && <span>This field is required</span>}
            </div>
            <div className={styles.btnFlex}>
              <button className={styles.cancel}>Cancel</button>
              <button className={styles.save}>Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
