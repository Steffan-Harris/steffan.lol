import emailArt from "../assets/email.art";
import githubArt from "../assets/github.art";
import linkedinArt from "../assets/linkedin.art";
import styles from "./Footer.module.css";
import TextArt from "./TextArt";

function Footer() {
    return <div className={styles.footer}>
        <ul className={styles.links}>
            <li><a href='https://github.com/Steffan-Harris'><TextArt label="ASCII art depicting the Github logo">{githubArt}</TextArt></a></li>
            <li><a href='mailto:contact@steffan.lol'><TextArt label="ASCII art depicting an email">{emailArt}</TextArt></a></li>
            <li><a href='https://www.linkedin.com/in/steffanharris/'><TextArt label="ASCII art depicting the Linkedin logo">{linkedinArt}</TextArt></a></li>
        </ul>
        <div className={styles.copyright}>&copy; 2025 steffan harris</div>
    </div>;
}

export default Footer;
