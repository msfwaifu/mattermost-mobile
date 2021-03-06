// Copyright (c) 2016 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getPing} from 'actions/general';
import SelectServerView from './select_server.js';

function mapStateToProps(state) {
    return {
        ping: state.entities.general.ping,
        device: state.views.device
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({getPing}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectServerView);
