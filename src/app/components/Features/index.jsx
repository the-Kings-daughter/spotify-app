import styles from './style.module.css'
import {features} from './data'



export const Features = () => {

    return(
        <section className={styles.features}>
            <h3 className={styles.title}>The power of Premium</h3>
            
            <div className={styles.list}>
                {features.map((features) => (
                    <div className={styles.item}>
                        <img src={features.image}  />
                       <div>
                            <h5 className={styles.title}>{features.title}</h5>
                            <p className={styles.description}>{features.description}</p>
                       </div>
                    </div>
                ))}
            </div>
        </section>
    )
}