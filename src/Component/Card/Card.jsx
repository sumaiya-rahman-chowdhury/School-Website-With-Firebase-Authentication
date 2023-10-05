
const Card = ({data}) => {

    // console.log(data)

    return (
        <div>
            <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 overflow-hidden rounded bg-transparent bg-clip-border text-gray-700 shadow-none">
    <img
      src={data?.cover_photo}
      alt="ui/ux review check"
    />
  </div>
  <div className="p-6">
    <h4 className="block font-sans font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
     {data?.name}
    </h4>
    <p className="mt-3 block font-sans text-[14px]  font-normal leading-relaxed text-gray-700 antialiased">
      {data?.description?.slice(0,50)}
    </p>
  </div>
</div>
        </div>
    );
};

export default Card;