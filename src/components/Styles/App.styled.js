import styled from "styled-components";

export const AppStyle = styled.div`
  background-image: ${({ bgImg }) =>
    bgImg >= 200 && bgImg < 233
      ? `url("https://images.unsplash.com/photo-1590767600885-427b16643a8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80"`
      : bgImg >= 300 && bgImg < 322
      ? `url("https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80")`
      : bgImg >= 500 && bgImg < 532
      ? `url("https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80")`
      : bgImg >= 600 && bgImg < 623
      ? `url("https://images.unsplash.com/photo-1482331336918-c80fab6c90f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80")`
      : bgImg >= 701 && bgImg < 781
      ? `url("https://images.unsplash.com/photo-1626268155390-010955b08ed6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80")`
      : bgImg === 800
      ? `url("https://images.unsplash.com/photo-1592513388667-c01b5a7b7dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80")`
      : bgImg >= 801 && bgImg < 805
      ? `url("https://images.unsplash.com/photo-1500835176302-48dbd01f6437?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1999&q=80")`
      : `url("https://images.unsplash.com/photo-1642749744303-eeba5f11e771?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1999&q=80")`};


/* test image as background */
  /* background-image: url("https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1935&q=80"); */

  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 100vh;
  overflow: hidden;

  // const theme = {
  //   bgImg: {
  //     thunderstorm: "200",
  //     drizzle: "300",
  //     rain: "500",
  //     snow: "600",
  //     fog: " 700",
  //     clear: "800",
  //     clouds: " 801",
  //     default: "backgroundImg"
  //   },
  // };
`;
