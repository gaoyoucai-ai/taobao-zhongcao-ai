import pandas as pd
import sys

try:
    # 读取 Excel 文件
    df = pd.read_excel(r'C:\Users\高有才\Desktop\111.xlsx')
    
    # 打印列名
    print("=== 列名 ===")
    print(df.columns.tolist())
    print()
    
    # 打印前 20 行数据
    print("=== 前 20 行数据 ===")
    print(df.head(20).to_string())
    print()
    
    # 打印数据概览
    print("=== 数据概览 ===")
    print(f"总行数：{len(df)}")
    print(f"总列数：{len(df.columns)}")
    print()
    
    # 打印数值统计
    print("=== 数值列统计 ===")
    print(df.describe())
    
except Exception as e:
    print(f"错误：{e}")
    sys.exit(1)
