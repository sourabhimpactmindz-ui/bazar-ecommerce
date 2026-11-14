import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";
import { useCreateuserMutation, useLoginuserMutation } from "../../Api/authApi";

const emailOk = (v) => /^\S+@\S+\.\S+$/.test(v);

function Mascot() {
  return (
    <svg className="auth__mascot" viewBox="0 0 80 90" fill="none" aria-hidden="true">
      <g stroke="#1a1410" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <rect x="14" y="8" width="38" height="50" rx="14" fill="#ffe53b" />
        <circle cx="26" cy="28" r="3" fill="#1a1410" />
        <circle cx="42" cy="28" r="3" fill="#1a1410" />
        <path d="M27 40q6 6 14 0" />
        <rect x="52" y="30" width="16" height="26" rx="4" fill="#fff" />
        <path d="M24 58v22M44 58v22M18 80h12M38 80h12" />
        <path d="M14 36l-8-6" />
      </g>
    </svg>
  );
}

function Field({ id, label, error, extra, children }) {
  return (
    <div className="auth__field">
      <div className="auth__row">
        <label className="auth__label" htmlFor={id}>{label}</label>
        {extra}
      </div>
      {children}
      {error && <p className="auth__error" id={`${id}-error`} role="alert">{error}</p>}
    </div>
  );
}

export default function AuthPage({ mode = "login" }) {
  const navigate = useNavigate();
  const isSignup = mode === "signup";

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
    role: "",
    storeName: "",
  });
  const [errors, setErrors] = useState({});
  const [showPw, setShowPw] = useState(false);
  const [done, setDone] = useState("");
  const [createUser , {isLoading : signingUp}] = useCreateuserMutation()
  const [loginUser , {isLoading : loggingIn}] = useLoginuserMutation()
   const isLoading = signingUp || loggingIn;


  const update = (key) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const switchMode = (next) => {
    setErrors({});
    setDone("");
    navigate(next === "signup" ? "/signup" : "/login");
  };

  const validate = () => {
    const er = {};
    if (isSignup && !form.name.trim()) er.name = "Enter your name.";
    if (isSignup && form.role === "seller" && !form.storeName.trim())
      er.storeName = "Enter your store name.";
    if (!emailOk(form.email)) er.email = "Enter a valid email, like you@example.com.";
    if (form.password.length < 8) er.password = "Use at least 8 characters.";
    if (isSignup && !form.terms) er.terms = "Accept the terms to create your account.";
    return er;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const er = validate();
  setErrors(er);
  if (Object.keys(er).length) return;

  const payload = isSignup
    ? {
        name: form.name,
        email: form.email,
        password: form.password,
        role: form.role,
        ...(form.role === "seller" && { storeName: form.storeName }),
      }
    : { email: form.email, password: form.password };

  try {
    const res = isSignup
      ? await createUser(payload).unwrap()
      : await loginUser(payload).unwrap();

    console.log("API response:", res);


    if (res?.status) {

        if (!isSignup) {
            localStorage.setItem("accessToken", res.accessToken);
            localStorage.setItem("refreshToken", res.refreshToken);

            navigate("/home", { replace: true });
        } else {
            setDone("Account created successfully!");
            navigate("/login");
        }
    }

  

    setDone(isSignup ? "Account created. Welcome to bazaar!" : "Logged in. Welcome back!");
    // navigate(account.role === "seller" ? "/seller/dashboard" : "/");
  } catch (err) {
    console.error("API error:", err);
    setErrors({
      form:
        err?.data?.message ||
        (err?.status === "FETCH_ERROR"
          ? "Can't reach the server. Is the backend running?"
          : "Something went wrong. Please try again."),
    });
  }
};

  const inputClass = (key, extra = "") =>
    `auth__input ${extra} ${errors[key] ? "auth__input--error" : ""}`.trim();

  return (
    <main className="auth">
      <header className="auth__bar">
        <a className="auth__logo" href="/">bazaar</a>
      </header>

      <section className="auth__head">
        <Mascot />
        <h1 className="auth__title">
          {isSignup ? <>Join<br />bazaar.</> : <>Welcome<br />back.</>}
        </h1>
        <p className="auth__sub">
          {isSignup
            ? "Make an account and we'll handle the picking, payments and delivery."
            : "Log in to see your bag, orders and this week's picks."}
        </p>
      </section>

      <div className="auth__card">
        <div className="auth__tabs" role="tablist" aria-label="Account">
          <button
            type="button" role="tab" className="auth__tab"
            aria-selected={!isSignup} onClick={() => switchMode("login")}
          >
            Log in
          </button>
          <button
            type="button" role="tab" className="auth__tab"
            aria-selected={isSignup} onClick={() => switchMode("signup")}
          >
            Sign up
          </button>
        </div>

        <form className="auth__form" onSubmit={handleSubmit} noValidate>
          {isSignup && (
            <fieldset className="auth__roles">
              <legend className="auth__label">I want to</legend>
              <label className="auth__role">
                <input
                  type="radio" name="role" value="user"
                  checked={form.role === "user"} onChange={update("role")}
                />
                <span className="auth__role-box">
                  <strong>Shop</strong>
                  <small>Buy things as a customer</small>
                </span>
              </label>
              <label className="auth__role">
                <input
                  type="radio" name="role" value="seller"
                  checked={form.role === "seller"} onChange={update("role")}
                />
                <span className="auth__role-box">
                  <strong>Sell</strong>
                  <small>Open a store on bazaar</small>
                </span>
              </label>
            </fieldset>
          )}

          {isSignup && (
            <Field id="name" label="Full name" error={errors.name}>
              <input
                id="name" className={inputClass("name")} type="text"
                autoComplete="name" placeholder="Aarav Sharma"
                value={form.name} onChange={update("name")}
                aria-invalid={!!errors.name}
              />
            </Field>
          )}

          {isSignup && form.role === "seller" && (
            <Field id="storeName" label="Store name" error={errors.storeName}>
              <input
                id="storeName" className={inputClass("storeName")} type="text"
                placeholder="Sharma Home Goods"
                value={form.storeName} onChange={update("storeName")}
                aria-invalid={!!errors.storeName}
              />
            </Field>
          )}

          <Field id="email" label="Email" error={errors.email}>
            <input
              id="email" className={inputClass("email")} type="email"
              autoComplete="email" placeholder="you@example.com"
              value={form.email} onChange={update("email")}
              aria-invalid={!!errors.email}
            />
          </Field>

          <Field
            id="password" label="Password" error={errors.password}
            extra={!isSignup && <a className="auth__link" href="/forgot-password">Forgot password?</a>}
          >
            <div className="auth__input-wrap">
              <input
                id="password" className={inputClass("password", "auth__input--pw")}
                type={showPw ? "text" : "password"}
                autoComplete={isSignup ? "new-password" : "current-password"}
                placeholder="At least 8 characters"
                value={form.password} onChange={update("password")}
                aria-invalid={!!errors.password}
              />
              <button
                type="button" className="auth__toggle"
                onClick={() => setShowPw((s) => !s)}
                aria-label={showPw ? "Hide password" : "Show password"}
              >
                {showPw ? "Hide" : "Show"}
              </button>
            </div>
          </Field>

          {isSignup && (
            <div className="auth__field">
              <label className="auth__check">
                <input type="checkbox" checked={form.terms} onChange={update("terms")} />
                <span>
                  I agree to the <a className="auth__link" href="/terms">Terms of Use</a> and{" "}
                  <a className="auth__link" href="/privacy">Privacy Policy</a>.
                </span>
              </label>
              {errors.terms && <p className="auth__error" role="alert">{errors.terms}</p>}
            </div>
          )}

          {done && <p className="auth__success" role="status">{done}</p>}

          <button className="auth__submit" type="submit" disabled={isLoading}>
            {isLoading ? "One moment…" : isSignup ? "Create account" : "Log in"}
          </button>

          <div className="auth__divider">or</div>

          <button type="button" className="auth__google">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M21.35 11.1H12v2.9h5.35c-.5 2.4-2.5 3.7-5.35 3.7a6 6 0 1 1 0-12c1.5 0 2.8.5 3.8 1.4l2.1-2.1A9 9 0 0 0 12 3a9 9 0 1 0 0 18c5.2 0 9-3.6 9-9 0-.6-.1-1-.15-1.9z" />
            </svg>
            Continue with Google
          </button>
        </form>

        <p className="auth__swap">
          {isSignup ? "Already have an account? " : "New to bazaar? "}
          <button type="button" onClick={() => switchMode(isSignup ? "login" : "signup")}>
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
      </div>
    </main>
  );
}