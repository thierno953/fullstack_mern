import React, { useState, useEffect } from "react";
import '../auth/style.css';
import ChipInput from "material-ui-chip-input";
import FileBase from "react-file-base64";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createTour, updateTour } from "../../redux/features/tourSlice";

const initialState = {
    title: "",
    description: "",
    tags: [],
};

const AddEditTour = () => {
    const [tourData, setTourData] = useState(initialState);
    const { error, loading, userTours } = useSelector((state) => ({
        ...state.tour,
    }));
    const { user } = useSelector((state) => ({
        ...state.auth,
    }));
    const dispatch = useDispatch();
    const [tagErrMsg, setTagErrMsg] = useState(null);
    const navigate = useNavigate();

    const { title, description, tags } = tourData;
    const { id } = useParams();

    // update
    useEffect(() => {

        if (id) {
            const singleTour = userTours.find((tour) => tour._id === id);
            console.log(singleTour);
            setTourData({ ...singleTour });
        }
    }, [id, loading]);

    useEffect(() => {
        error && toast.error(error);
    }, [error]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!tags.length) {
            setTagErrMsg("Please provide some tags");
        }

        if (title && description && tags) {
            const updatedTourData = { ...tourData, name: user?.result?.name };
            if (!id) {
                dispatch(createTour({ updatedTourData, navigate, toast }));
            } else {
                dispatch(updateTour({ id, updatedTourData, toast, navigate }));
            }
            handleClear();
        }
    };

    const onInputChange = (e) => {
        const { name, value } = e.target;
        setTourData({ ...tourData, [name]: value });
    };
    const handleAddTag = (tag) => {
        setTagErrMsg(null);
        setTourData({ ...tourData, tags: [...tourData.tags, tag] });
    };
    const handleDeleteTag = (deleteTag) => {
        setTourData({
            ...tourData,
            tags: tourData.tags.filter((tag) => tag !== deleteTag),
        });
    };
    const handleClear = () => {
        setTourData({ title: "", description: "", tags: [] });
    };


    return (
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder='Title' value={title} onChange={onInputChange} />
                <textarea rows="6" name="description" placeholder="Enter Description" value={description} onChange={onInputChange} />
                <ChipInput name="tags" variant="outlined" placeholder="Enter Tag" fullWidth value={tags} onAdd={(tag) => handleAddTag(tag)} onDelete={(tag) => handleDeleteTag(tag)} />
                {tagErrMsg && <div className="tagErrMsg">{tagErrMsg}</div>}
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setTourData({ ...tourData, imageFile: base64 })} />
                <button className='btn btn-secondary'>
                    {id ? "Update" : "Submit"}
                </button>
            </form>
        </div>
    )
}

export default AddEditTour