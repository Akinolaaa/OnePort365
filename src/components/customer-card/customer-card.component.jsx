
import Button from "../button/button.component";

const CustomerCard = ({ customer }) => {
  const { Avatar, email, first_name, last_name, phone } = customer
  return(
    <div className="flex justify-between w-2/4 px-6 py-4 rounded border border-[#D1D5DB] bg-[#F9FAFB]">
      <div className="flex items-center space-x-6 ">
        <img className="rounded-full" src={Avatar} alt='Avatar' />
        <div>
          <p className="font-bold" >{first_name + ' ' + last_name}</p>
          <p className="" >{email}</p>
          <p className="" >{phone}</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button>Edit</Button>
      </div>
    </div>
  )
}

export default CustomerCard;