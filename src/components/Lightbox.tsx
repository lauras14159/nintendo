import Image from "next/image";

export default function Lightbox() {
  return (
    <div className="flex-row flex">
      <div className="flex-col">
        <Image
          src="img1.jpg"
          //   onClick="openModal();currentSlide(1)"
          className="hover-shadow"
          alt={""}
        />
      </div>
      <div className="flex-col">
        <Image
          src="img2.jpg"
          //   onClick="openModal();currentSlide(2)"
          className="hover-shadow"
          alt={""}
        />
      </div>
      {/* <div className="column">
        <Image
          src="img3.jpg"
          onClick="openModal();currentSlide(3)"
          className="hover-shadow"
        />
      </div>
      <div className="column">
        <Image
          src="img4.jpg"
          onClick="openModal();currentSlide(4)"
          className="hover-shadow"
        /> */}
    </div>
  );
}
/* <!-- The Modal/Lightbox --> */
{
  /* <div id="myModal" className="modal">
  <span className="close cursor" onClick="closeModal()">&times;</span>
  <div className="modal-content">

    <div className="mySlides">
      <div className="numbertext">1 / 4</div>
      <Image src="img1_wide.jpg" style="width:100%">
    </div>

    <div className="mySlides">
      <div className="numbertext">2 / 4</div>
      <Image src="img2_wide.jpg" style="width:100%">
    </div>

    <div className="mySlides">
      <div className="numbertext">3 / 4</div>
      <Image src="img3_wide.jpg" style="width:100%">
    </div>

    <div className="mySlides">
      <div className="numbertext">4 / 4</div>
      <Image src="img4_wide.jpg" style="width:100%">
    </div>

    <!-- Next/previous controls -->
    <a className="prev" onClick="plusSlides(-1)">&#10094;</a>
    <a className="next" onClick="plusSlides(1)">&#10095;</a>

    <!-- Caption text -->
    <div className="caption-container">
      <p id="caption"></p>
    </div>

    <!-- Thumbnail <Image controls -->
    <div className="column">
      <Image className="demo" src="img1.jpg" onClick="currentSlide(1)" alt="Nature">
    </div>

    <div className="column">
      <Image className="demo" src="img2.jpg" onClick="currentSlide(2)" alt="Snow">
    </div>

    <div className="column">
      <Image className="demo" src="img3.jpg" onClick="currentSlide(3)" alt="Mountains">
    </div>

    <div className="column">
      <Image className="demo" src="img4.jpg" onClick="currentSlide(4)" alt="Lights">
    </div>
  </div>
</div> */
}
