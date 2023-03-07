import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/reduxState/Store";
import Sidebar from "@/components/Sidebar/Sidebar";
import DashNavbar from "@/components/DashNavbar/DashNavbar";
import { Open_Sans } from "@next/font/google";

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className={open_sans.className}>
        <Provider store={store}>
          <div className="common">
            <Sidebar />
            <div>
              <DashNavbar />
              <Component {...pageProps} />
            </div>
          </div>
        </Provider>
      </div>
    </>
  );
}
