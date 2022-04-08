import { FC } from "react";
type MyAssetCardProps = {
  asset: Object;
};

export const MyAssetCard: FC<MyAssetCardProps> = ({ asset }) => {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <picture>
            <source
              srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F828a31101a7c4b9ab529750899a45f5d?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F828a31101a7c4b9ab529750899a45f5d?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F828a31101a7c4b9ab529750899a45f5d?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F828a31101a7c4b9ab529750899a45f5d?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F828a31101a7c4b9ab529750899a45f5d?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F828a31101a7c4b9ab529750899a45f5d?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F828a31101a7c4b9ab529750899a45f5d?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F828a31101a7c4b9ab529750899a45f5d"
              type="image/webp"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F828a31101a7c4b9ab529750899a45f5d"
              srcSet="https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F828a31101a7c4b9ab529750899a45f5d?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F828a31101a7c4b9ab529750899a45f5d?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F828a31101a7c4b9ab529750899a45f5d?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F828a31101a7c4b9ab529750899a45f5d?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F828a31101a7c4b9ab529750899a45f5d?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F828a31101a7c4b9ab529750899a45f5d?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F828a31101a7c4b9ab529750899a45f5d?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FTEMP%2F828a31101a7c4b9ab529750899a45f5d"
              className="image"
            />
          </picture>
          <div className="builder-image-sizer image-sizer" />
        </div>
        <div className="div-3">Triumphant Awak...</div>
        <div className="div-4">
          <div className="builder-columns div-5">
            <div className="builder-column column">
              <div className="div-6">Price</div>
            </div>
            <div className="builder-column column-2">
              <div className="div-7">4.89 ADA</div>
            </div>
            <div className="builder-column column-3">
              <div className="div-8">=12.46$</div>
            </div>
          </div>
        </div>
        <div className="div-9">
          <div className="div-10">Cancel Sell </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          display: flex;
          flex-direction: column;
          max-width: 382px;
          justify-content: flex-start;
          align-items: flex-start;
          border-radius: 22px;
          box-shadow: 0px 20px 55px 0px rgba(202, 202, 202, 0.25);
          border-color: rgba(0, 0, 0, 0.15000000596046448);
          border-width: 1px;
          border-style: solid;
          background-color: rgba(255, 255, 255, 1);
          height: 508px;
        }
        .div-2 {
          display: flex;
          align-self: stretch;
          position: relative;
          min-width: 20px;
          min-height: 20px;
          max-width: 382px;
          border-color: rgba(0, 0, 0, 0.15000000596046448);
          border-width: 0.5px;
          border-style: solid;
        }
        .image {
          object-fit: cover;
          object-position: center;
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          left: 0;
        }
        .image-sizer {
          width: 100%;
          padding-top: 69.3717277486911%;
          pointer-events: none;
          font-size: 0;
        }
        .div-3 {
          display: flex;
          flex-direction: column;
          max-width: 248px;
          justify-content: flex-start;
          align-items: flex-start;
          padding-top: 35px;
          padding-bottom: 30px;
          padding-right: 10px;
          padding-left: 20px;
          color: rgba(19, 19, 19, 1);
          font-size: 28px;
          line-height: 58.500003814697266%;
          letter-spacing: 0%;
          text-align: left;
          font-family: DM Sans, sans-serif;
        }
        .div-4 {
          display: flex;
          flex-direction: column;
          max-width: 350px;
          padding-top: 7px;
          padding-bottom: 32px;
          padding-right: 7px;
          padding-left: 25px;
        }
        .div-5 {
          display: flex;
        }
        @media (max-width: 999px) {
          .div-5 {
            flex-direction: column;
            align-items: stretch;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(29.65% - 13.333333333333334px);
          margin-left: 0px;
        }
        @media (max-width: 999px) {
          .column {
            width: 100%;
          }
        }
        .div-6 {
          max-width: 59px;
          color: rgba(19, 19, 19, 1);
          font-size: 25px;
          letter-spacing: 0%;
          text-align: left;
          font-family: DM Sans, sans-serif;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(54.77% - 13.333333333333334px);
          margin-left: 20px;
        }
        @media (max-width: 999px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-7 {
          max-width: 109px;
          color: rgba(19, 19, 19, 1);
          font-size: 25px;
          letter-spacing: 0%;
          text-align: center;
          font-family: DM Sans, sans-serif;
          padding-bottom: 1px;
          margin-right: px;
        }
        .column-3 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: calc(35.18% - 13.333333333333334px);
          margin-left: 20px;
        }
        @media (max-width: 999px) {
          .column-3 {
            width: 100%;
          }
        }
        .div-8 {
          max-width: 70px;
          color: rgba(43, 151, 193, 1);
          font-size: 20px;
          letter-spacing: 0%;
          text-align: left;
          font-family: DM Sans, sans-serif;
        }
        .div-9 {
          display: flex;
          flex-direction: column;
          max-width: 357px;
          justify-content: flex-start;
          align-items: flex-start;
          padding-left: 40px;
        }
        .div-10 {
          display: flex;
          flex-direction: row;
          max-width: 115px;
          justify-content: flex-start;
          align-items: flex-start;
          border-radius: 100px;
          padding-top: 22px;
          padding-bottom: 22px;
          padding-right: 101px;
          padding-left: 101px;
          background-color: rgba(193, 43, 106, 1);
          color: rgba(255, 255, 255, 1);
          font-size: 22px;
          line-height: 58.500003814697266%;
          letter-spacing: 0%;
          text-align: left;
          font-family: DM Sans, sans-serif;
        }
      `}</style>
    </>
  );
};
