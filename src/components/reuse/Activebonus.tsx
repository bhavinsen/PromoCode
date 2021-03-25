import Button from '@material-ui/core/Button';

const ActiveBonus: any = (props: any) => {
    return (
        <Button onClick={()=>props.selectBtn(!props.indexData)}>{props.indexData?"Activate":"Activate bonus"}</Button>
    );
};

export default ActiveBonus;
