import { Type } from 'class-transformer';
import { IsOptional, ValidateNested, IsString, IsNotEmpty, MaxLength } from 'class-validator';

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
    @IsString()
        email?: string;
}

export class PatchInfluencerDto {
    @ValidateNested()
    @Type(() => ManagerDto)
        manager: ManagerDto;

    @IsOptional()
    @IsString()
    @MaxLength(50, { message: 'First name cannot exceed 50 characters' })
        firstName?: string;

    @IsOptional()
    @IsString()
    @MaxLength(50, { message: 'Last name cannot exceed 50 characters' })
        lastName?: string;

    @IsOptional()
    @ValidateNested({ each: true })
        socialMediaHandles?: Array<{
        type: 'instagram' | 'tiktok';
        userName: string;
    }>;
}
