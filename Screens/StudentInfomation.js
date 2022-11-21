import {Text, View} from 'react-native';

const StudentInformation = (props) => {
    const {params} = props.route
    const stuID = params? params.stuID:null;

    const showReport = () => {
        let show;
        if (stuID == "001") {
            show = <Text>hi</Text>
        }
        return(show);
    }

    return (
        <View>
            <Text>{stuID}</Text>
            {showReport()}
        </View>
    );
}

export default StudentInformation