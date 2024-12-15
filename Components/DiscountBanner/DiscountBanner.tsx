import styles from "@/styles/DiscountBanner.module.css";
interface Props {
  announcementText: string;   
  startDate:string;
  endDate:string;
}
const checkIfDateInRange = (startDate:string , endDate:string): boolean => {
const SDate = new Date(startDate);
const EDate = new Date(endDate);
const now = new Date(); 
    return now >= SDate && now <= EDate;
}

const DiscountBanner: React.FC<Props> = ({announcementText,startDate,endDate }) => {
  return (
<>
    {checkIfDateInRange(startDate , endDate) && (
        <div className={styles.banner}>
          <div className={styles.bannerContent}>
            <span className={styles.announcementText}>{announcementText}</span>
          </div>
        
        </div>
    )}
    </>
  )}

  


export default DiscountBanner;
