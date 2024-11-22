import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
	return (
		<footer>
			<p>Copyright by F8</p>
			<button className={styles.btn}>Follow F8</button>
		</footer>
	);
};

export default Footer;
