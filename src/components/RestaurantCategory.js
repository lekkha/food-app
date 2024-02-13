import ItemList from "./ItemList";

const RestrauntCategory = ({ data }) => {
    // console.log(data);
    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
                {/* header */}
                <div className="flex justify-between">
                    <span className="font-bold">{data.title} ({data.itemCards.length})</span>
                    <span>🔽</span>
                </div>
                {/* //accordian body */}
                <ItemList items={data.itemCards} />
            </div>

        </div>
    );
}

export default RestrauntCategory; 