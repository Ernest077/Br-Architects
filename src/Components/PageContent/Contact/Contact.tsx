import cls from "./Contact.module.scss";;

const Contact = () => {
    return (
        <>
            <div className={cls.ContactSection}>
                <p className={cls.ProjectContext}>Contact</p>
                <p>Lets get in touch and talk about your next project.</p>
                <form>
                    <input className={cls.ContactInput} type="text" placeholder="Name" />
                    <input className={cls.ContactInput} type="text" placeholder="Email" />
                    <input className={cls.ContactInput} type="text" placeholder="Sabject" />
                    <input className={cls.ContactInput} type="text" placeholder="Comment" />
                    <button className={cls.ContactButton}>
                        SEND MESSAGE
                    </button>
                </form>
            </div>
        </>
    )
}

export default Contact;