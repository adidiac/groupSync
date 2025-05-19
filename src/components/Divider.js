import styled from 'styled-components';

export default styled.div`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 2px;               /* adjust thickness here */
  background: ${({ theme }) => theme.fg};
  clip-path: polygon(
    0   0,      /* top-left */
    100% 20%,   /* top-right dipped 20% down */
    100% 100%,  /* bottom-right */
    0   80%     /* bottom-left 20% up */
  );
  margin-bottom: -1px;        /* remove any gap */
`;
