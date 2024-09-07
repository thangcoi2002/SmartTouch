#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(RCTWifiModule, RCTEventEmitter)

RCT_EXTERN_METHOD(getWifiSSID:(RCTResponseSenderBlock *)successCallback)
@end
