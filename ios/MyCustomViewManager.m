//
//  MyCustomViewManager.m
//  customViewInRN
//
//  Created by csdc-iMac on 16/5/23.
//  Copyright © 2016年 Cloudox. All rights reserved.
//

#import "MyCustomViewManager.h"
#import "MyCustomView.h"
#import <UIKit/UIKit.h>


@implementation MyCustomViewManager

RCT_EXPORT_MODULE();

RCT_EXPORT_VIEW_PROPERTY(isRed, BOOL);

- (UIView *)view {
  MyCustomView *theView;
  theView = [[MyCustomView alloc] init];
  return theView;
}

@end
