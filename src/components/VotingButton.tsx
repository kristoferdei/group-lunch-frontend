import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'

enum ButtonStatus {
  VOTED,
  UNVOTED,
  LOADING,
}

const VotingButton: React.FunctionComponent<{ onClick: any; status?: ButtonStatus }> = ({ onClick, status = ButtonStatus.UNVOTED }) => {
  return (
    <button
      onClick={onClick}
      className={
        status === ButtonStatus.VOTED
          ? 'bg-green-600 p-2 rounded-full h-10 w-10 text-white mx-5 -mb-16 hover:bg-green-500 focus:outline-none'
          : 'bg-red-600 p-2 rounded-full h-10 w-10 text-white mx-5 -mb-16 hover:bg-red-500 focus:outline-none'
      }
    >
      <FontAwesomeIcon icon={ButtonStatus.VOTED ? faCheck : faTimes} />
    </button>
  )
}

export default VotingButton
