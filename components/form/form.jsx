import styles from './form.module.css'
import "../../app/globals.css"

import Input from "../input/input"
import Button from '../button/button'

export default function Form (){
    return(
        <form className={styles.form}>

        <Input />
        <Input />
        <Button />
        </form>
    )
}