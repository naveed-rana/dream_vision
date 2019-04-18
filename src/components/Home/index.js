import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import { connect } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import CardCustom from "../smallScreenResults";
import TablePaginationActionsWrapped from "../paginations";
import TablePagination from "@material-ui/core/TablePagination";
import Table from "@material-ui/core/Table";
import TableFooter from "@material-ui/core/TableFooter";
import TableRow from "@material-ui/core/TableRow";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ReactPlayer from "react-player";
import { spacing } from '@material-ui/system';
import Tooltip from "@material-ui/core/Tooltip";
import { toast } from "react-toastify";
import PropTypes from 'prop-types';
import styles from "./style"

import { withStyles } from '@material-ui/core/styles';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ads: [],
      copyData: [],
      page: 0,
      rowsPerPage: 4,
      adsViewOf: true,
      defVideo:'',
      currentVideo:{},
      viewlater:false
    };
  }

  componentDidMount() {
    document.title = "Home";
    this.setState({
      ads: this.props.ads,
      copyData: this.props.ads,
      currentVideo:this.props.ads[0]
    });
    console.log(this.props);
  }

  adsViewOff = () => {
    this.setState({ adsViewOf: false });
  };

  onClickHandler = data => {
    const { ads } = this.state;
    let filter = ads.filter(item => item.category === data);
    this.setState({ copyData: filter });
  };
  componentWillReceiveProps(nextProps) {
    this.setState({ ads: nextProps.ads, copyData: nextProps.ads });
  }
  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  changeCurrentVideo=(news)=>{
    console.log(news);
    this.setState({
        currentVideo:news
    })
  }
  addToLater=()=>{
    this.setState({
        viewlater:true
    })
    toast.success("Saved successfully for later view!");
  }
  // removeFromLater=()=>{
  //   this.setState({
  //       viewlater:false
  //   })
  //   toast.success("Saved successfully for later view!");
  // }
  render() {
const {classes} = this.props;

    const { copyData, rowsPerPage, page, adsViewOf,currentVideo,viewlater } = this.state;
    return (
      <div>
        <Grid container spacing={8}>
          <Hidden smDown>
            <Grid item xs={1} md={2}>
              {adsViewOf ? (
                <img
                  width="100%"
                  onClick={this.adsViewOff}
                  src={require("../resource/images/ads3.JPG")}
                  alt=""
                />
              ) : (
                ""
              )}
            </Grid>
          </Hidden>
          <Grid item xs={12} md={8}>
            <Paper className="shadownone" elevation={10}>
              <Typography variant="body2" className="paddingLeft" align="left">
               Featured Videos
              </Typography>
              <Divider />
              <Grid container spacing={8} className="">


                {/* <Grid
                  item
                  xs={6}
                  md={3}
                  className="pointer"
                  onClick={() => this.onClickHandler("bikes")}
                  align="center"
                >
                  <img src={require("../resource/images/bike.JPG")} alt="" />
                  <Typography variant="body2">Bike</Typography>
                </Grid>
                */}




                <Grid item xs={12} md={12}>
                  {/* <Divider /> */}
                  {
                    copyData.length > 0 ? (
                  //   copyData
                  //     .slice(
                  //       page * rowsPerPage,
                  //       page * rowsPerPage + rowsPerPage
                  //     )
                  //     .map((ad, i) => {
                  //       return (
                  //         <CardCustom
                  //           key={i}
                  //           ad={ad}
                  //           large={window.innerWidth < 700 ? "small" : "large"}
                  //         />
                  //       );
                  //     })

                  // <CardCustom
                             
                  //            ad={this.state.currentVideo}
                  //            large={window.innerWidth < 700 ? "small" : "large"}
                  //          />
                  // )
                  
                  <Grid item xs={12} md={12}>
                    <Card className="" elevation={2}>
                          <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                              {currentVideo.channel_name}
                            </Typography>
                            <Typography  component="h5">
                              { currentVideo.title   }
                              {viewlater ? (
                                  <Tooltip title="Save for later View" placement="top">
                                    <IconButton
                                      aria-label="Add to favorites"
                                      onClick={this.onRemoveHandler}
                                    >
                                      <FavoriteIcon className="colorSet" />
                                    </IconButton>
                                  </Tooltip>
                                ) : (
                                  <Tooltip title="Save for later View" placement="top">
                                    <IconButton
                                      aria-label="Add to favorites"
                                      onClick={this.addToLater}
                                    >
                                      <FavoriteIcon />
                                    </IconButton>
                                  </Tooltip>
                            )}
                            </Typography>
                              <ReactPlayer 
                                url={this.state.currentVideo.youtube_url} 
                                playing
                                controls={true}
                                width='100%' />
                          </CardContent>
                        <CardActions>
                        {/* <IconButton aria-label="Add to favorites">
                              <FavoriteIcon />
                          </IconButton> */}
                        </CardActions>
                    </Card>
                  </Grid> )
                  : (
                    <img
                      width="100%"
                      src={require("../resource/images/postloader.gif")}
                      alt=""
                    />
                  )}
                 
                </Grid>
                <Divider />
                <Paper>
                <Grid container spacing={8} className="padding" style={{paddingLeft: "10px", paddingRight: "10px"}} px={2}>
                  {
                      copyData
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((news, i) => {
                        console.log(news)
                        return (
                          <Grid item xs={12} md={3} key={i}>  
                          <Card className=""  className={classes.heightFixed}>
                          <CardActionArea>
                            <CardMedia
                              className=""
                              component="img"
                              image={news.thumbnail}
                              title="Contemplative Reptile"
                              onClick={()=>this.changeCurrentVideo(news)}
                              />
                            <CardContent onClick={()=>this.changeCurrentVideo(news)}>
                              <Typography gutterBottom variant="h5" component="h2">
                                {news.channel_name}
                              </Typography>
                              <Typography  component="h5">
                                { news.title }
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                          <CardActions>
                          {/* <IconButton aria-label="Add to favorites">
                                <FavoriteIcon />
                            </IconButton> */}
                          </CardActions>
                      </Card>
                      </Grid>
                  )})
                  }
                  <Table>
                      <TableFooter>
                        <TableRow>
                          <TablePagination
                            colSpan={2}
                            count={copyData.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            labelDisplayedRows={() => ""}
                            labelRowsPerPage=""
                            rowsPerPageOptions={[2, 5, 10, 25]}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActionsWrapped}
                          />
                        </TableRow>
                      </TableFooter>
                    </Table>
                </Grid>
                </Paper>
               
              </Grid>
            </Paper>
           
                   {/* <Grid item xs={12} md={12}>
<Slider {...settings}>
                    {
                    copyData.map((news,i)=>{
                      console.log(news);
                      return (
                              <Grid item xs={12} md={3} key={i}>  
                             
                                <Card className="" >
                                  <CardActionArea>
                                    <CardMedia
                                      className=""
                                      component="img"
                                      image={news.thumbnail}
                                      title="Contemplative Reptile"
                                      />
                                    <CardContent>
                                      <Typography gutterBottom variant="h5" component="h2">
                                        {news.channel_name}
                                      </Typography>
                                      <Typography  component="p">
                                        { news.details }
                                      </Typography>
                                    </CardContent>
                                  </CardActionArea>
                                  <CardActions>
                                  <IconButton aria-label="Add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                  </CardActions>
                              </Card>
                                   </Grid>
                            )})}
</Slider>
                    </Grid>  */}



          </Grid>
          <Hidden smDown>
            <Grid item xs={1} md={2}>
              {adsViewOf ? (
                <img
                  width="100%"
                  onClick={this.adsViewOff}
                  src={require("../resource/images/ads3.JPG")}
                  alt=""
                />
              ) : (
                ""
              )}
            </Grid>
          </Hidden>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};


const mapStateToProps = state => ({
  ads: state.search.ads
});
export default connect(
  mapStateToProps,
  null
)(withStyles(styles)(Home));
