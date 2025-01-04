/* eslint-disable no-unused-vars */

import {
    IsString,
    IsNotEmpty,
    IsArray,
    ValidateNested,
    IsOptional,
    IsEmail,
    MaxLength,
    IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum SocialMediaType {
    Instagram = 'instagram',
    TikTok = 'tiktok',
}

class SocialMediaHandleDto {
    @IsEnum(SocialMediaType, { message: 'Social media handle must be either instagram or tiktok' })
    @IsNotEmpty({ message: 'Social media handle type is required' })
        type: SocialMediaType;

    @IsString()
    @IsNotEmpty({ message: 'Social media handle username is required' })
        userName: string;
}

class ManagerDto {
    @IsString()
    @IsNotEmpty({ message: 'Manager ID is required' })
        id: string;

    @IsOptional()
    @IsString()
        imgUrl?: string;

    @IsString()
    @IsNotEmpty({ message: 'Manager first name is required' })
    @MaxLength(50, { message: 'Manager first name cannot exceed 50 characters' })
        firstName: string;

    @IsString()
    @IsNotEmpty({ message: 'Manager last name is required' })
    @MaxLength(50, { message: 'Manager last name cannot exceed 50 characters' })
        lastName: string;

    @IsOptional()
    @IsEmail({}, { message: 'Invalid email format' })
        email?: string;
}

export class CreateInfluencerDto {
    @IsString()
    @IsNotEmpty({ message: 'First name is required' })
    @MaxLength(50, { message: 'First name cannot exceed 50 characters' })
        firstName: string;

    @IsString()
    @IsNotEmpty({ message: 'Last name is required' })
    @MaxLength(50, { message: 'Last name cannot exceed 50 characters' })
        lastName: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => SocialMediaHandleDto)
        socialMediaHandles: SocialMediaHandleDto[];

    @ValidateNested()
    @Type(() => ManagerDto)
        manager: ManagerDto;
}
