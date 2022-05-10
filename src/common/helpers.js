import toastr from 'toastr';
import { useNavigate } from "react-router-dom";

const showToast = ({ success, message }) => {
    success ? toastr.success(message) : toastr.error(message);
}

const navigateTo = ({ pathName }) => {
    const navigate = useNavigate();
    navigate(pathName);
}


export { showToast, navigateTo };