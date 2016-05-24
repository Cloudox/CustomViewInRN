//
//  MyCustomView.m
//  customViewInRN
//
//  Created by csdc-iMac on 16/5/23.
//  Copyright © 2016年 Cloudox. All rights reserved.
//

#import "MyCustomView.h"

@implementation MyCustomView
{
  UIColor *squareColor;
}

- (void)setIsRed:(BOOL)isRed {
  squareColor = (isRed) ? [UIColor redColor] : [UIColor greenColor];
  [self setNeedsDisplay];
}

- (void)drawRect:(CGRect)rect {
  [squareColor setFill];
  CGContextFillRect(UIGraphicsGetCurrentContext(), rect);
}


@end
