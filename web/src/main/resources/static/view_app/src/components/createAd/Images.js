import React, {Component} from 'react'
import {updateImages, imageDeleted, updatePrimaryImgIndex} from '../../actions/index';
import {connect} from '../../../node_modules/react-redux';
import '../../static/imagesCreateAd.css'
import ReactDropzone from '../../../node_modules/react-dropzone';
import isOK from '../../static/icons/isOk.png';
import deleteIcon from '../../static/icons/deleteIcon.png';

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
        console.log('lalalaA', hoverIndex);
        this.setState({
            text: 'Сделать главной',
            hoverImgIndex: hoverIndex
        })
    };

    onMouseClearText = () => {
        this.setState({text: '', hoverImgIndex: ''})
    };

    onPreviewDrop = (file) => {
           file.map((file, index) => {
               var reader = new FileReader();
               reader.readAsDataURL(file);
               reader.onloadend = () => {
                   console.log('lololololo', this.state.i, '', index)
                   this.props.updateImages(({index: index + this.state.i, base64String: reader.result, name: file.name}));
               };
               return '';
        });
        this.setState({i: this.state.i + file.length})
    };

    handleImageClicked = (index) => {
        this.props.updatePrimaryImgIndex(index)
    };

    handleImageDeleted = (index, e) => {
        e.stopPropagation();
        this.props.imageDeleted(index)
    };

    render() {
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
                        <button type="button" className="upload-img-btn" onClick={() => dropzoneRef.current.open()}>
                            Загрузить фотографии
                        </button>
                    </div>
                    {this.props.images.length > 0 &&
                    <div className="images-hor-block">
                        {this.props.images.filter(element => element.base64String !== '').map(img => (
                            <div className={img.index === this.props.primaryImgIndex ? 'image-active' : 'image'}
                                 onClick={() => this.handleImageClicked(img.index)}
                                 key={img.index}>
                                {img.index === this.props.primaryImgIndex ? ImgIsOk : ''}
                                <div className={img.index === this.state.hoverImgIndex ? 'warning-active' : 'warning'}>
                                    {img.index === this.state.hoverImgIndex &&
                                    img.index !== this.props.primaryImgIndex ? this.state.text : ''}
                                </div>
                                <div style={{display: 'inline-flex', position: 'relative'}}>
                                    <div onMouseEnter={() => this.onMouseSetText(img.index)}
                                         onMouseLeave={this.onMouseClearText}>
                                        <img alt=""
                                             src={img.base64String}
                                             className={img.index === this.state.hoverImgIndex &&
                                             img.index !== this.props.primaryImgIndex ? 'img-view-warning-active' : 'img-view'}
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