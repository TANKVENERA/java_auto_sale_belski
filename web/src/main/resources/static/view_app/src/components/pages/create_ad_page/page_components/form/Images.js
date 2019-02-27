import React, {Component} from 'react'
import {connect} from '../../../../../../node_modules/react-redux';
import ProgressBar from '../../../../../../node_modules/react-bootstrap/lib/ProgressBar'
import ReactDropzone from '../../../../../../node_modules/react-dropzone';
import '../../../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import './styles/images.css'
import isOK from '../../../../../static/icons/isOk.png';
import deleteIcon from '../../../../../static/icons/deleteIcon.png';
import {updateImages, imageDeleted, updatePrimaryImgIndex} from '../../actions/formActions/actions';

const MapStateToProps = (state) => {
    return {
        images: state.createAdParams.images,
        primaryImgIndex: state.createAdParams.primaryImgIndex
    }
};

const MapDispatchToProps = (dispatch) => {
    return {
        updateImages: images => dispatch(updateImages(images)),
        imageDeleted: index => dispatch(imageDeleted(index)),
        updatePrimaryImgIndex: index => dispatch(updatePrimaryImgIndex(index))
    }
};

const ImgIsOk = (
    <img alt="" className="isOk" src={isOK}/>
);


const dropzoneRef = React.createRef();

class Images extends Component {
    constructor(props) {
        super(props);

        this.state = {
            files: [],
            imgIndex: '',
            text: '',
            hoverImgIndex: '',
            i : 0
        };
    }

    onMouseSetText = (hoverIndex) => {
        this.setState({
            text: 'Сделать главной',
            hoverImgIndex: hoverIndex
        })
    };

    onMouseClearText = () => {
        this.setState({text: '', hoverImgIndex: ''})
    };

    onPreviewDrop = (files) => {
           files.map((file, index) => {
               var reader = new FileReader();
               reader.readAsDataURL(file);
               reader.onloadend = () => {
                   this.props.updateImages(({index: index + this.state.i, preview: URL.createObjectURL(file),
                                             base64String: reader.result, name: file.name
                                             }));
               };
               return '';
        });
        this.setState({i: this.state.i + files.length})
    };

    handleImageClicked = (index) => {
        this.props.updatePrimaryImgIndex(index)
    };

    handleImageDeleted = (index, e) => {
        e.stopPropagation();
        this.props.imageDeleted(index)
    };

    render() {
        console.log('CREATEADDD', this.props.images)
        let images = this.props.images.filter(el =>{return el.preview !== ''});
        let primaryImgIndex = this.props.primaryImgIndex;
        return (
            <div className="images">
                <ReactDropzone
                    ref={dropzoneRef}
                    disableClick
                    className="dropzone"
                    accept="image/*"
                    maxSize={5000000}
                    onDrop={this.onPreviewDrop}
                >
                    <div className="button-block">
                        <div style={{display: 'table-cell'}}>
                            <button type="button" className="upload-img-btn" onClick={() => dropzoneRef.current.open()}>
                                Загрузить фотографии
                            </button>
                        </div>
                        <div className="progressBar">
                            <ProgressBar now={images.length * 10}
                                         label={`${images.length * 10}%`}/>
                        </div>
                    </div>

                    {this.props.images.length > 0 &&
                    <div className="images-hor-block">
                        {images.map(img => (
                            <div className={img.index === primaryImgIndex ? 'image-active' : 'image'}
                                 onClick={() => this.handleImageClicked(img.index)}
                                 key={img.index}>
                                {img.index === primaryImgIndex ? ImgIsOk : ''}
                                <div className={img.index === this.state.hoverImgIndex ? 'warning-active' : 'warning'}>
                                    {img.index === this.state.hoverImgIndex &&
                                    img.index !== primaryImgIndex ? this.state.text : ''}
                                </div>
                                <div style={{display: 'inline-flex', position: 'relative'}}>
                                    <div onMouseEnter={() => this.onMouseSetText(img.index)}
                                         onMouseLeave={this.onMouseClearText}>
                                        <img alt=""
                                             src={img.preview}
                                             className={img.index === this.state.hoverImgIndex &&
                                             img.index !== primaryImgIndex ? 'img-view-warning-active' : 'img-view'}
                                        />
                                    </div>
                                    <div>
                                        <img alt=""
                                             className="delete-icon"
                                             src={deleteIcon}
                                             onClick={(e) => this.handleImageDeleted(img.index, e)}/>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    }
                </ReactDropzone>
            </div>
        )
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Images)