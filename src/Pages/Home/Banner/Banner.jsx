
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';



const Banner = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Carousel>
                <div>
                    <img className="max-h-screen" src="https://i.huffpost.com/gen/1210519/original.jpg" />
                </div>
                <div>
                    <img className="max-h-screen" src="https://th.bing.com/th/id/R.34a516be4c904d802466dbc3cd857dda?rik=UhSOyGr72ge6wQ&riu=http%3a%2f%2fassets3.thrillist.com%2fv1%2fimage%2f1303640%2fsize%2ftl-cover_story_2x%2fthe-25-most-beautiful-college-campuses-in-america&ehk=c2mzwmZ6KWuOMV0gyMODjf973IbFApawEnjxLfUFHFw%3d&risl=&pid=ImgRaw&r=0" />
                </div>
            </Carousel>
        </div>

    );
};

export default Banner;