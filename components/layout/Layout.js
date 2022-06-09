// import MainNavigation from './MainNavigation';
import Footer from './Footer';

import styles from "./Layout.module.css"

import { subscribeUserHandler } from '../../pages/coming-soon';

function Layout(props) {
  return (
    <div>
      <main className={styles.main}>{props.children}</main>
      <Footer subscribeToNews={subscribeUserHandler} />
    </div>
  );
}

export default Layout;