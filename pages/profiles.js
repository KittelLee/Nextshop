import React from "react";
import styles from "../styles/profiles.module.css";
import Image from "next/image";
import pic from "../public/images/pic.jpeg";
import Layout from "../components/Layout";

export default function profile() {
  return (
    <Layout title="profile">
      <div className={styles.wrap}>
        <h1 className={styles.h1}>Profile</h1>
        <div className={styles.review_box}>
          <div className={styles.slide} id="slide">
            <div className={styles.card}>
              <div className={styles.profile}>
                <Image src={pic} width={70} height={70} alt="Image" />
                <div>
                  <h3 className="ml-5">이진욱</h3>
                  <p className="ml-5">[Front-End] Web Developer</p>
                </div>
              </div>
              <p>
                학교&학과: 중부대학교 고양캠퍼스 정보보호학과
                <br />
                학번: 91812969 [18] <br />
                이메일: leejin7900@gmail.com <br />
                블로그:{" "}
                <a
                  className="hover:text-blue-600"
                  href="https://projectlog.tistory.com/"
                >
                  https://projectlog.tistory.com/
                </a>
                <br />
                도약: 2019년도 부터 웹프론트엔드를 준비하고있습니다. <br />
                목표: 뒤쳐지지지않는 프론트엔드
                <br />
                웹개발자 되기 사용언어: HTML5, CSS3, JavaScript, React, Next.js
              </p>
            </div>
          </div>
          <div className={styles.sidebar}></div>
        </div>
      </div>
    </Layout>
  );
}
