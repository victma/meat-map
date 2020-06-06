import React from 'react';
import styled from '@emotion/styled';

import CenteredColumn from '../layouts/centeredColumn';

import { colors, animation, screen } from '../constants';

const Cells = styled.g({
  fill: colors.logoGreen,
  transition: animation.transition.default,
});

const Text = styled.text({
  fill: colors.background,
});

const ViewBox = styled.svg({
  width: '100%',
  height: 500,
  [screen.mediaQuery.s]: {
    height: 610,
  },
});

const Map = styled.div({
  background: colors.logoBlue,
  transition: animation.transition.default,

  '&:hover': {
    background: colors.lightGrey,

    [Cells]: {
      fill: colors.background,
      stroke: colors.text,
    },
    [Text]: {
      fill: colors.text,
    },
  }
});

const MapComponent = () => {
  return (
    <Map>
      <CenteredColumn noPadding>
        <ViewBox
          viewBox="0 0 280 190"
          preserveAspectRatio="xMidYMid slice"
        >
          <Cells
            transform="translate(36,-56)"
          >
            <path
              d="M 48.380953,77.107141 C 34.90915,80.88033 20.392191,90.081633 15.497024,103.1875 c -5.023507,13.44947 -0.85259,30.98176 7.9375,42.33333 10.904696,14.08239 30.572862,22.99148 48.380953,22.67857 22.930129,-0.40291 65.097463,-8.76644 61.232133,-31.37202 C 129.2546,114.64466 95.65749,135.07517 82.020832,117.17262 72.314247,104.42956 82.344248,92.823278 72.571428,80.13095 67.613745,73.692223 56.206069,74.915479 48.380953,77.107141 Z"
            />
            <path
              d="m 151.19047,179.16071 c -6.76474,1.29835 -13.69335,9.00245 -13.22916,15.875 0.67907,10.05409 12.2246,20.26772 22.30059,20.41071 9.82478,0.13943 23.35966,-9.50826 22.3006,-19.27678 -1.28214,-11.82612 -19.68984,-19.25109 -31.37203,-17.00893 z"
            />
          </Cells>
          <Cells>
            <path
              d="m 82.323216,53.974997 c -5.787607,0.48565 -11.89081,7.447464 -11.339287,13.229166 0.672662,7.051613 9.591749,14.0212 16.630954,13.229167 5.611789,-0.631424 11.150813,-7.610552 10.583333,-13.229167 -0.692187,-6.853339 -9.010917,-13.805145 -15.875,-13.229166 z"
            />
            <path
              d="m 189.02699,137.18894 c -2.39554,-0.0881 -4.85285,2.94859 -4.81085,5.34538 0.0629,3.59078 3.96311,7.04077 7.48355,7.75082 1.99528,0.40244 5.10258,-0.43491 5.61266,-2.40543 1.12982,-4.36465 -3.77989,-10.52511 -8.28536,-10.69077 z"
            />
          </Cells>
        </ViewBox>
      </CenteredColumn>
    </Map>
  );
};

export default MapComponent;
