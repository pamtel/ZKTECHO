import styled from "styled-components";

export const ContainerWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
  .header-container {
    top: 0;
    left: -5px;
    background: #ffffff;
    box-shadow: 0px 0px 17px rgba(8, 37, 100, 0.09);
    height: 80px;
    z-index: 999999;
    position: sticky;
    width: 100%;
    .navbar {
      padding: 20px 0 20px 20px;
      .input {
        width: 607px;
      }
      .MuiBadge-colorPrimary {
        background: #0dc671 !important;
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
    .sidebar-header {
      background: #ffffff;
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
          background: #e5e5e5 !important;
          border-radius: 5px !important;
        }
        .zk-icon {
          fill: #000000 !important;
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
        background: #e6eeff;
        border-radius: 10px;
        .content {
          padding: 20px;
        }
      }
    }
    .people-wrapper {
      margin-right: 293px;
      padding: 20px;
      max-width: 100% !important;
      .contain {
        background: #e6eeff;
        border-radius: 10px;
        padding: 20px;
      }
      .right-nav {
        width: 294px;
        position: fixed;
        right: 19px;
        bottom: 0;
        background: #ffffff;
        box-shadow: 0px 0px 10px rgba(8, 37, 100, 0.09);
        height: calc(100vh - 80px);
        z-index: 2;
        padding: 20px;
        .project-wrapper{
          display: grid;
          grid-template-columns: auto auto;
          gap: 20px;
          .project-content {
            width: 110px;
            background: #F7F6FB;
            border-radius: 16px;
            .price-icon {
              border-left: 3px solid transparent;
              line-height: 22px;
              padding-left: 5px;
            }
            .price-icon.darkorange {
              border-color: #E67A00;
            }
            .price-icon.royalblue {
              border-color: #363ADE;
            }
            .price-icon.forestgreen {
              border-color: #10A237;
            }
            .price-icon.tomato {
              border-color: #FF5041;
            }
          }
        }
        .chat-wrapper {
          background: #F2F2F2;
          border-radius: 4px;
        }
      }
    }
  }
  .chat-icon {
    width: 40px;
    height: 40px;
    background: #005BFF;
    border-radius: 8px;
  }
  .MuiButton-label{
    text-transform: capitalize;
    color: #0091FF;
    font-size: 16px;
  }
  .activePeople p{
    color: #0052CE;
    border-bottom: 3px solid #0052CE;
  }
  .text-royalblue {
    color: #7378F3 !important;
  }
  .text-forestgreen {
    color: #0DD480!important;
  }
  .text-tomato {
    color: #F42727 !important;
  }
  .input-text {
    background: #EFF2F6;
    border: 1px solid #D8D8D8;
    border-radius: 4px 0px 0px 4px;
    padding: 7px 15px;
  }
  .search {
    left: -9px;
  }
`
export const StaffWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  grid-gap: 20px;
  padding-top: 50px;
 .card-wrapper {
  width: 295px;
  height: 305px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
}
`