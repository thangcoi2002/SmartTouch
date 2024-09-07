import Foundation
import SystemConfiguration.CaptiveNetwork

@objc(RCTWifiModule)
class WifiModule: NSObject {
  @objc
  static func requiresMainQueueSetup() -> Bool{
    return false
  }
  
  @objc
  func getWifiSSID(_ successCallback: @escaping RCTResponseSenderBlock){
    guard let interfaces = CNCopySupportedInterfaces() as? [String] else {
      successCallback([["statusCode": 500, "message": "Can't get wifi information!"]])
         return
       }

       for interface in interfaces {
         if let interfaceInfo = CNCopyCurrentNetworkInfo(interface as CFString) as NSDictionary? {
           if let ssid = interfaceInfo[kCNNetworkInfoKeySSID as String] as? String {
             successCallback([["statusCode": 200, "ssid": ssid]])
             return
           }
         }
       }

    successCallback([["statusCode": 404, "message": "Device not connected to network!"]])
     }
  }
