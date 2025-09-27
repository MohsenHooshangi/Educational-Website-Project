import React from "react";
import FooterItem from "../FooterItem/FooterItem";
import { Link } from "react-router-dom";
import Input from "./../../Components/Form/Input";
import { emailValidator } from "../../validators/rules";
import { useForm } from "../../hooks/useForm";
import swal from "sweetalert";

import "./Footer.css";

export default function Footer() {
  const [formState, onInputHandler] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const addNewEmail = (event) => {
    event.preventDefault();
    const newEmail = {
      email: formState.inputs.email.value,
    };

    fetch("http://localhost:4000/v1/newsletters", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEmail),
    }).then((res) => {
      if (res.ok) {
        swal({
          title: "ایمیل شما با موفقیت در خبرنامه ثبت شد",
          icon: "success",
          buttons: "خیلی هم عالی",
        });
      }
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-widgets">
          <div className="row">
            <FooterItem title="درباره ماهر">
              <p className="footer-widgets__text">
                ماهر یک کارخانه تولید اطلاعات صنعتی است. ما دوره‌های آموزشیِ عملی و کاربردی تولید می‌کنیم و در اختیار مهندسین و صنعتگران قرار می‌دهیم. تاکنون، بیش از 55۰۰۰ نفر از دوره‌های آموزشی ماهر استفاده کرده‌اند. نتایج این دانش پذیران نشان دهنده‌ کیفیت بالای آموزش‌های ماهر است.
              </p>
            </FooterItem>

            <FooterItem title="دوره‌های محبوب">
              <div className="footer-widgets__links">
                <a href="#" className="footer-widgets__link">
                  دوره آموزش برق صنعتی
                </a>
                <a href="#" className="footer-widgets__link">
                  دوره آموزش نصب پنل خورشیدی
                </a>
                <a href="#" className="footer-widgets__link">
                  دوره آموزش اتوماسیون زیمنس
                </a>
                <a href="#" className="footer-widgets__link">
                  دوره آموزش ارتینگ
                </a>
                <a href="#" className="footer-widgets__link">
                  دوره آموزش محاسبات اتصال کوتاه
                </a>
              </div>
            </FooterItem>

            <FooterItem title="دسترسی سریع">
              <div className="row">
                <div className="col-6">
                  <a href="#" className="footer-widgets__link">
                    درباره ماهر
                  </a>
                </div>

                <div className="col-6">
                  <a href="#" className="footer-widgets__link">
                    ارتباط با ماهر
                  </a>
                </div>

                <div className="col-6">
                  <a href="#" className="footer-widgets__link">
                    درخواست مشاوره با ماهر
                  </a>
                </div>
                <div className="col-6">
                  <a href="#" className="footer-widgets__link">
                    راهنمای مطالعه دوره‌ها
                  </a>
                </div>
                <div className="col-6">
                  <a href="#" className="footer-widgets__link">
                    سامانه آزمون
                  </a>
                </div>

                <div className="col-6">
                  <a href="#" className="footer-widgets__link">
                    همکاری با ماهر
                  </a>
                </div>

                <div className="col-6">
                  <Link to="/contact" className="footer-widgets__link">
                    مجله ماهر
                  </Link>
                </div>
                <div className="col-12">
                  <span className="footer-widgets__title">
                    تالار گفتمان
                  </span>
                  <span className="footer-widgets__text text-center d-block">
                    جهت اطلاع از آخرین اخبار و تخفیف های سایت مشترک شوید!
                  </span>
                  <form action="#" className="footer-widgets__form">
                    <Input
                      element="input"
                      id="email"
                      type="text"
                      className="footer-widgets__input"
                      placeholder="ایمیل خود را وارد کنید."
                      onInputHandler={onInputHandler}
                      validations={[emailValidator()]}
                    />
                    <button
                      type="submit"
                      className="footer-widgets__btn"
                      onClick={addNewEmail}
                    >
                      عضویت
                    </button>
                  </form>
                </div>
              </div>
            </FooterItem>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        <span className="footer__copyright-text">
          کلیه حقوق برای آکادمی ماهر محفوظ است.
        </span>
      </div>
    </footer>
  );
}
