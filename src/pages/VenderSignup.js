import styles from "./VenderSignup.module.css";
const VenderSignup = () => {
  return (
    <div className={styles.venderSignup}>
      <div className={styles.venderSignupChild} />
      <b className={styles.signUp}>Sign up!</b>
      <div className={styles.signUpWrapper}>
        <div className={styles.signUp1}>Sign Up</div>
      </div>
      <div className={styles.venderSignupItem} />
      <div className={styles.venderSignupInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.password}>Password</div>
      <div className={styles.username}>Username</div>
      <div className={styles.newPassword}>New Password</div>
      <div className={styles.forgetPassword}>{`Forget Password? `}</div>
      <div className={styles.alreadyHaveAnAccountParent}>
        <div
          className={styles.alreadyHaveAn}
        >{`Already have an account?  `}</div>
        <div className={styles.logInHere}>Log in here</div>
      </div>
      <img className={styles.envelove03Icon} alt="" src="/envelove03@2x.png" />
    </div>
  );
};

export default VenderSignup;
