import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="איך לשחק" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        תנחשו את המילה ב-6 נסיונות. אחרי כל ניחוש, הצבע של המשבצת ישתנה
        על מנת להראות לכם כמה אתם קרובים למילה
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="מ"
          status="correct"
        />
        <Cell value="ו" />
        <Cell value="כ" />
        <Cell value="ל" />
        <Cell value="ל" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        האות מ נמצאת במילה והיא במיקום הנכון
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="פ" />
        <Cell value="ר" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="ק"
          status="present"
        />
        <Cell value="ט" />
        <Cell value="י" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        האות ק קיימת במילה אבל נמצאת במיקום הלא נכון
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="ח" />
        <Cell value="ל" />
        <Cell value="י" />
        <Cell isRevealing={true} isCompleted={true} value="פ" status="absent" />
        <Cell value="י" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        האות פ לא נמצאת במילה בכלל
      </p>

      {/* <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        זוהי גרסאת אופן-סורס למשחק מילים שכולנו אוהבים -{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          תראו את הקוד כאן
        </a>{' '}
      </p> */}
    </BaseModal>
  )
}
