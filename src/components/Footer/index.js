import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import logo from "../resource/images/logo.png";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { Email, Phone } from "@material-ui/icons";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footerbg">
          <Grid container spacing={8}>
            <Grid item xs={12} sm={12} md={4}>
              <img src={logo} alt="logo" />
              <Typography paragraph variant="caption" className="peraColor">
                {/* OLX is the world's leading classifieds platform which provides
                local communities in high-growth markets with vibrant online
                marketplaces: OLX connects local people to buy, sell or exchange
                used goods and services by making it fast and easy for anyone to
                post a listing through their mobile phone or on the web. */}
                DreamVision is a platform for news lovers to keep people aware of
                every activity which affects in some way by providing latest talk show
                videos where you can search videos of your own choice and keep yourself updated.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={4} className="marginTop20">
              <Typography variant="body2">IMPORTANT LINKS</Typography>

              <List className="fontSizeSet">
                <ListItem align="center">
                  <ListItemText secondary="Aaj Shahzeb Khanzada Kay Sath" />
                </ListItem>
                <ListItem>
                  <ListItemText secondary="Meray Mutabiq" />
                </ListItem>
                <ListItem>
                  <ListItemText secondary="Sar e Aam" />
                </ListItem>

                <ListItem>
                  <ListItemText secondary="Naya Pakistan" />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={12} md={4} className="marginTop20">
              <Typography variant="body2">CONTACTS</Typography>

              <List className="fontSizeSet">
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Email />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText secondary="help@dreamvision.com" />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <Phone />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText secondary="65454121/64562378" />
                </ListItem>
              </List>
              <Typography variant="caption">
                <img
                  src={require("../resource/images/download.png")}
                  alt="fb"
                />
                <img
                  src={require("../resource/images/download (1).png")}
                  alt="fb"
                />
                <img src={require("../resource/images/insta.jpg")} alt="fb" />
                <img src={require("../resource/images/skype.png")} alt="fb" />
                <img
                  src={require("../resource/images/whatsapp.png")}
                  alt="fb"
                />
              </Typography>
            </Grid>
          </Grid>
        </div>
        <Grid container spacing={8} className="copyWrite">
          <Grid item xs={12} sm={12} md={12}>
            <center>
              <Typography variant="body2">
                Copyright © 2019 DreamVision Pakistan - All Rights Reserved.
              </Typography>
              <Typography variant="caption">
                <span>Privacy Policy</span> Term Conditions
              </Typography>
            </center>
          </Grid>
        </Grid>
      </div>
    );
  }
}
export default Footer;
