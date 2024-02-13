const RestrauntCategory = ({ data }) => {
    console.log(data);
    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4 flex justify-between">
            {/* header */}
            <span className="font-bold">{data.title} ({data.itemCards.length})</span>
            <span>🔽</span>
        </div>

        //accordian body 

    );
}

export default RestrauntCategory; 