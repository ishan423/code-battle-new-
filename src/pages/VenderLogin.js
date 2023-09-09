import styles from "./VenderLogin.module.css";
const VenderLogin = () => {
  return (
    <div className={styles.venderLogin}>
      <div className={styles.venderLoginChild} />
      <div className={styles.or}>or</div>
      <div className={styles.welcomeToEnveloveContainer}>
        <p className={styles.welcomeToEnvelove}>
          welcome to envelove! your one stop
        </p>
        <p
          className={styles.welcomeToEnvelove}
        >{` for customized gifting.          `}</p>
      </div>
      <b className={styles.hiThere}>Hi There!</b>
      <div className={styles.pngwingcom2Parent}>
        <img
          className={styles.pngwingcom2Icon}
          alt=""
          src="/pngwingcom-2@2x.png"
        />
        <div className={styles.logInWith}>Log in with google</div>
      </div>
      <div className={styles.logInWrapper}>
        <div className={styles.logIn}>Log in</div>
      </div>
      <div className={styles.venderLoginItem} />
      <div className={styles.venderLoginInner} />
      <div className={styles.yourEmail}>Your Email</div>
      <div className={styles.yourName}>Your Name</div>
      <div className={styles.forgetPassword}>{`Forget Password? `}</div>
      <div className={styles.dontHaveAnAccountParent}>
        <div className={styles.dontHaveAn}>Don't have an account?</div>
        <div className={styles.signUp}>Sign up</div>
      </div>
      <img className={styles.envelove03Icon} alt="" src="/envelove03@2x.png" />
    </div>
  );
};

export default VenderLogin;
