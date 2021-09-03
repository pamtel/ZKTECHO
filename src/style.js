import styled from "styled-components";

// Styled component named StyledButton
export const ContainerWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
  .header-container {
    top: 0;
    left: -5px;
    background: #FFFFFF;
    box-shadow: 0px 0px 17px rgba(8, 37, 100, 0.09);  
    height: 80px;
    z-index: 999999;
    position: sticky;
    width: 100%;
    .navbar {
      padding: 20px;
      .input {
        width: 607px;
      }
      .MuiBadge-colorPrimary {
        background: #0DC671 !important;
      }
    }
  }
  .sidebar-container {
    position: fixed;
    z-index: 999;
    width: 268px;
    top: 0;
    left: 0;
    bottom: 0;
    .sidebar-header{
      background: #FFFFFF;
      box-shadow: 0px 0px 17px rgba(8, 37, 100, 0.09);
    height: 80px;
    z-index: 999999;
    position: sticky;
    padding: 25px 36px 0 36px;
    }
    .sidebar-wrapper {
      width: 100%;
      height: 900px;
      box-shadow: 0px 0px 17px rgba(8, 37, 100, 0.09);
      padding: 40px 36px 0 36px;
      .MuiListItem-gutters {
        padding: 0 5px !important;
        margin-bottom: 20px;
        height: 44px;
      }
      .active {
        .MuiListItem-gutters {
          background: #E5E5E5 !important;
          border-radius: 5px !important;
        }
        .MuiTypography-body1 {
          color: #000 !important;
          font-weight: 700 !important;
        }
      }
    }
  }
  .main-content {
    max-width: 100%;
    height: 100vh;
    position: relative;
    margin-left: 268px;
    overflow-x: hidden;
    .main-children {
      padding: 20px;
      .contain {
        background: #E6EEFF;
        border-radius: 10px;
        .content {
          padding: 20px;
        }
      }
    }
    .people-wrapper {
      display: flex;
      position: relative;
      .contain {
        width: calc(100% - 294px);
        background: #E6EEFF;
      border-radius: 10px;
      padding: 20px;
      margin: 20px;
      }
      .right-nav {
        width: 294px;
        right: 0;
        top: 0;
        bottom: 0;
        background: red;
        height: 200px;
      }
    }
    .top-up {
      background: '#005BFF';
    }
  }
`
