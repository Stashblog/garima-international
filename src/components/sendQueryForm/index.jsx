import s from './styles.module.scss'

const SendQueryForm = ({ isVisible, onClose }) => {
  if (!isVisible) return null // Don't render anything if the modal is not visible

  return (
    <div className={s.modalOverlay}>
      <div className={s.modalBackdrop} onClick={onClose}></div> {/* Click to close */}
      <div className={s.modalContent}>
        <h2>Send Query</h2>
        <form>
          <div className={s.formGroup}>
            <label htmlFor='name'>Name</label>
            <input type='text' id='name' name='name' required />
          </div>
          <div className={s.formGroup}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email' required />
          </div>
          <div className={s.formGroup}>
            <label htmlFor='contact'>Contact No</label>
            <input type='tel' id='contact' name='contact' required />
          </div>
          <div className={s.formGroup}>
            <label htmlFor='businessName'>Business Name</label>
            <input type='text' id='businessName' name='businessName' required />
          </div>
          <div className={s.formGroup}>
            <label htmlFor='query'>Your Query</label>
            <textarea id='query' name='query' required />
          </div>
          <button type='submit' className={s.sendButton}>
            Send Query
          </button>
        </form>
      </div>
    </div>
  )
}

export default SendQueryForm
