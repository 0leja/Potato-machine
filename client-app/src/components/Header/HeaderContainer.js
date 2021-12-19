import {connect} from "react-redux";
import {setAuthDAtaThunk} from "../../redux/authReducer";
import {useEffect} from "react";
import Header from "./Header";

function HeaderContainer (props) {
    useEffect(() => {
        if (!isLogined) {
            setAuthDAtaThunk()
        }
    })

    return <Header {...props} />
}

const mapStateToProps = state => {
    return {
        name: state.auth.name,
        surname: state.auth.surname,
        img: state.auth.img,
        isLogined: state.auth.isLogined
    }
}

export default connect(mapStateToProps, {
    setAuthDAtaThunk
})(HeaderContainer)