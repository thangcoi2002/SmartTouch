package com.smarttouch;

import android.content.Context;
import android.net.wifi.WifiInfo;
import android.net.wifi.WifiManager;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableMap;

import org.json.JSONObject;

public class WifiModule extends ReactContextBaseJavaModule {

    private ReactApplicationContext reactContext;

    WifiModule(ReactApplicationContext context) {
        super(context);
        this.reactContext = context;
    }

    @Override
    public String getName() {
        return "WifiModule";
    }

    @ReactMethod
    public void getWifiSSID(Callback successCallback) {
        WritableMap result = Arguments.createMap();
        try {
            WifiManager wifiManager = (WifiManager) reactContext.getApplicationContext().getSystemService(Context.WIFI_SERVICE);
            WifiInfo wifiInfo = wifiManager.getConnectionInfo();
            String ssid = wifiInfo.getSSID();

            if (ssid != null && !ssid.isEmpty()) {
                ssid = ssid.replace("\"", "");
                result.putInt("statusCode", 200);
                result.putString("ssid", ssid);
            } else {
                result.putInt("statusCode", 404);
                result.putString("message", "Device not connected to network!");
            }
            successCallback.invoke(result);
        } catch (Exception e) {
            result.putInt("statusCode", 500);
            result.putString("message", e.getMessage());
            successCallback.invoke(result);
        }
    }
}