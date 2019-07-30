package com.skyerstarter;

import android.app.Application;
import android.util.Log;

import com.facebook.react.PackageList;
import com.facebook.hermes.reactexecutor.HermesExecutorFactory;
import com.facebook.react.bridge.JavaScriptExecutorFactory;
import com.facebook.react.ReactApplication;
import com.zmxv.RNSound.RNSoundPackage;
import com.reactnativecommunity.asyncstorage.AsyncStoragePackage;
import com.BV.LinearGradient.LinearGradientPackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.AlexanderZaytsev.RNI18n.RNI18nPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;

import com.facebook.soloader.SoLoader;

import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {

      @SuppressWarnings("UnnecessaryLocalVariable")
      List<ReactPackage> packages = new PackageList(this).getPackages();
      // Packages that cannot be autolinked yet can be added manually here, for example:
      // packages.add(new AsyncStoragePackage());
      // packages.add(new LinearGradientPackage());
      // packages.add(new RNGestureHandlerPackage());
      // packages.add(new RNI18nPackage());
      // packages.add(new ReanimatedPackage());
      // packages.add(new VectorIconsPackage());
      return packages;

      // return Arrays.<ReactPackage>asList(
      //     new MainReactPackage(),
            new RNSoundPackage(),
      //       new AsyncStoragePackage(),
      //       new LinearGradientPackage(),
      //       new RNGestureHandlerPackage(),
      //       new RNI18nPackage(),
      //       new ReanimatedPackage(),
      //       new VectorIconsPackage()
      // );

    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
