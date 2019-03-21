import m from 'mithril';
import Scoreboard from './Scoreboard';
import FllScorer from 'robots-ju-fll-robotgame-scorer-2018';
import {decodeHash, encodeHash} from '../helpers/decodeNumericHash';

export default {
    oninit(vnode) {
        vnode.state.missions = JSON.parse(JSON.stringify(FllScorer.initialMissionsState));


        if (window.location.hash) {
            try {
                const hash = window.location.hash.substring(1);

                let initialMissionsState;

                if (hash.match(/^[0-6]{33}$/)) {
                    initialMissionsState = decodeHash(hash);
                } else {
                    initialMissionsState = JSON.parse(decodeURIComponent(hash));
                }

                for (let attr in initialMissionsState) {
                    if (initialMissionsState.hasOwnProperty(attr) && vnode.state.missions.hasOwnProperty(attr)) {
                        vnode.state.missions[attr] = initialMissionsState[attr];
                    }
                }
            } catch (e) {
                console.warn(e);
            }
        }
    },
    view(vnode) {
        const missionHash = '#' + encodeHash(vnode.state.missions);

        if (missionHash === '#000000000000000000000000000000000') {
            if (window.location.hash) {
                window.location.hash = '';
            }
        } else {
            if (missionHash !== window.location.hash) {
                window.location.hash = missionHash;
            }
        }

        return m(Scoreboard, {
            missions: vnode.state.missions,
        });
    },
}
